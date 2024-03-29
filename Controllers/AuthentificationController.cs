﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hospital_onco.Data;
using Hospital_onco.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Identity;
using AutoMapper.Configuration;
using AutoMapper;
using Hospital_onco.ViewModels.Authentification;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System;
using System.Globalization;
using System.IO;
using IConfiguration = Microsoft.Extensions.Configuration.IConfiguration;

namespace Hospital_onco.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        /*private const string V = "Jwt:SigningKey";*/
       /* private const string V1 = "Jwt:ExpiryInMinutes";*/
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;

        public AuthenticationController(UserManager<ApplicationUser> userManager,
            ApplicationDbContext context,
            IConfiguration configuration,
            IMapper mapper
            )
        {
            _userManager = userManager;
            _context = context;
            _configuration = configuration;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("register")] // /api/authentication/register
        public async Task<ActionResult> RegisterUser(RegisterRequest registerRequest)
        {
            var user = new ApplicationUser
            {
                Email = registerRequest.Email,
                UserName = registerRequest.UserName,
                FirstName = registerRequest.FirstName,
                LastName = registerRequest.LastName,
                BirthDate = registerRequest.BirthDate != null ? DateTime.Parse(registerRequest.BirthDate) : null,
                Gender = (ApplicationUser.GenderType)registerRequest.Gender,
                SecurityStamp = Guid.NewGuid().ToString(),
                EmailConfirmed = true // a hack, but we're not implementing email confirmation
            };

            var result = await _userManager.CreateAsync(user, registerRequest.Password);

            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, UserRole.ROLE_USER);
                return Ok(new RegisterResponse { ConfirmationToken = user.SecurityStamp });
            }

            return BadRequest(result.Errors);
        }

        [HttpGet("current")]
        [Authorize(AuthenticationSchemes = "Identity.Application,Bearer")]
        public async Task<ActionResult<AuthUserResponse>> GetCurrentUser()
        {
            var user = await _userManager.FindByNameAsync(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            if (user == null)
            {
                return NotFound();
            }

            var roles = await _userManager.GetRolesAsync(user);

            var viewModel = _mapper.Map<AuthUserResponse>(user);

            viewModel.Roles = roles;

            return viewModel;
        }


        [HttpPost]
        [Route("login")]
        public async Task<ActionResult> Login(LoginRequest loginRequest)
        {
            var user = await _userManager.FindByEmailAsync(loginRequest.Email);
            if (user != null && await _userManager.CheckPasswordAsync(user, loginRequest.Password))
            {
                var claims = new[] {
                    new Claim(JwtRegisteredClaimNames.Sub, user.UserName)
                };

                var signinKey = new SymmetricSecurityKey(
                   Encoding.UTF8.GetBytes(_configuration["Jwt:SigningKey"]));

                int expiryInMinutes = Convert.ToInt32(_configuration["Jwt:ExpiryInMinutes"]);

                var token = new JwtSecurityToken(
                  issuer: _configuration["Jwt:Site"],
                  audience: _configuration["Jwt:Site"],
                  expires: DateTime.UtcNow.AddMinutes(expiryInMinutes),
                  signingCredentials: new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256),
                  claims: claims
                );

                return Ok(
                  new
                  {
                      token = new JwtSecurityTokenHandler().WriteToken(token),
                      expiration = token.ValidTo
                  });
            }

            return Unauthorized();
        }
    }
}