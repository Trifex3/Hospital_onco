using Microsoft.EntityFrameworkCore.Migrations;

namespace Hospital_onco.Migrations
{
    public partial class AddDoctor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Doctors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DoctorInvestigation",
                columns: table => new
                {
                    DoctorsId = table.Column<int>(type: "int", nullable: false),
                    InvestigationsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DoctorInvestigation", x => new { x.DoctorsId, x.InvestigationsId });
                    table.ForeignKey(
                        name: "FK_DoctorInvestigation_Doctors_DoctorsId",
                        column: x => x.DoctorsId,
                        principalTable: "Doctors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DoctorInvestigation_Investigations_InvestigationsId",
                        column: x => x.InvestigationsId,
                        principalTable: "Investigations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DoctorInvestigation_InvestigationsId",
                table: "DoctorInvestigation",
                column: "InvestigationsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DoctorInvestigation");

            migrationBuilder.DropTable(
                name: "Doctors");
        }
    }
}
