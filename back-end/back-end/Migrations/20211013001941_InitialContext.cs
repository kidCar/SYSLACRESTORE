using Microsoft.EntityFrameworkCore.Migrations;

namespace back_end.Migrations
{
    public partial class InitialContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EquipmentAsig",
                columns: table => new
                {
                    idAsigment = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    equipmentstock = table.Column<int>(type: "int", nullable: false),
                    allasigned = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EquipmentAsig", x => x.idAsigment);
                });

            migrationBuilder.CreateTable(
                name: "EquipmentDetails",
                columns: table => new
                {
                    EquipmentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nserie = table.Column<string>(type: "nvarchar(45)", nullable: true),
                    name = table.Column<string>(type: "nvarchar(45)", nullable: true),
                    model = table.Column<string>(type: "nvarchar(45)", nullable: true),
                    category = table.Column<string>(type: "nvarchar(45)", nullable: true),
                    imei = table.Column<int>(type: "int", nullable: false),
                    equipmentstock = table.Column<int>(type: "int", nullable: false),
                    carctetis = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    accesories = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    codigo = table.Column<string>(type: "nvarchar(50)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EquipmentDetails", x => x.EquipmentId);
                });

            migrationBuilder.CreateTable(
                name: "UsersUpdate",
                columns: table => new
                {
                    dni = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nameuser = table.Column<string>(type: "nvarchar(45)", nullable: true),
                    sur_paternal = table.Column<string>(type: "nvarchar(45)", nullable: true),
                    sur_maternal = table.Column<string>(type: "nvarchar(45)", nullable: true),
                    direction = table.Column<string>(type: "nvarchar(45)", nullable: true),
                    email = table.Column<int>(type: "int", nullable: false),
                    departament = table.Column<string>(type: "nvarchar(45)", nullable: true),
                    puesto = table.Column<string>(type: "nvarchar(45)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsersUpdate", x => x.dni);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EquipmentAsig");

            migrationBuilder.DropTable(
                name: "EquipmentDetails");

            migrationBuilder.DropTable(
                name: "UsersUpdate");
        }
    }
}
