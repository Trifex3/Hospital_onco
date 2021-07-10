using Microsoft.EntityFrameworkCore.Migrations;

namespace Hospital_onco.Migrations
{
    public partial class FixUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "AspNetRoles",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Discriminator", "Name", "NormalizedName" },
                values: new object[] { "305d4add-5b76-44e5-b63d-f5fd4e23211a", "22a2911f-ffb0-413b-b9bc-a3f825e9853b", "UserRole", "AppUser", "APPUSER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Discriminator", "Name", "NormalizedName" },
                values: new object[] { "fc5f4e96-501e-4100-9124-2b7592afa7f5", "f17a35c8-992b-4201-9b37-68708591ad28", "UserRole", "AppAdmin", "APPADMIN" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "305d4add-5b76-44e5-b63d-f5fd4e23211a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fc5f4e96-501e-4100-9124-2b7592afa7f5");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "AspNetRoles");
        }
    }
}
