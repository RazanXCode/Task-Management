using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace TaskService.Migrations
{
    /// <inheritdoc />
    public partial class SeedTaskData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "tasks",
                columns: new[] { "Id", "Completed", "Description", "Title" },
                values: new object[,]
                {
                    { 1, false, "Milk, eggs, bread", "Buy groceries" },
                    { 2, false, "Check in and say hello", "Call mom" },
                    { 3, false, "Complete the work report", "Finish report" },
                    { 4, false, "Organize and tidy up", "Clean room" },
                    { 5, false, "Electricity and internet", "Pay bills" },
                    { 6, false, "Read 10 pages of a novel", "Read book" },
                    { 7, false, "Go for a 30-minute walk", "Exercise" },
                    { 8, false, "Reply to pending emails", "Send email" },
                    { 9, false, "Make a healthy meal", "Cook dinner" },
                    { 10, false, "Relax and enjoy", "Watch a movie" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "tasks",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "tasks",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "tasks",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "tasks",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "tasks",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "tasks",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "tasks",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "tasks",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "tasks",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "tasks",
                keyColumn: "Id",
                keyValue: 10);
        }
    }
}
