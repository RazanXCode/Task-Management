using Microsoft.EntityFrameworkCore;
using TaskService.Models;
namespace TaskService.Data
{


  public class MyAppDbContext : DbContext
  {


    public MyAppDbContext(DbContextOptions<MyAppDbContext> options) : base(options) { }

    // Create Data set
    public DbSet<TaskItem> tasks { get; set; }

    // Seed the database with some data 
    // protected override void OnModelCreating(ModelBuilder modelBuilder)
    // {
    //   modelBuilder.Entity<TaskItem>().HasData(
    //       new TaskItem { Id = 1, Title = "Buy groceries", Description = "Milk, eggs, bread", Completed = false },
    //       new TaskItem { Id = 2, Title = "Call mom", Description = "Check in and say hello", Completed = false },
    //       new TaskItem { Id = 3, Title = "Finish report", Description = "Complete the work report", Completed = false },
    //       new TaskItem { Id = 4, Title = "Clean room", Description = "Organize and tidy up", Completed = false },
    //       new TaskItem { Id = 5, Title = "Pay bills", Description = "Electricity and internet", Completed = false },
    //       new TaskItem { Id = 6, Title = "Read book", Description = "Read 10 pages of a novel", Completed = false },
    //       new TaskItem { Id = 7, Title = "Exercise", Description = "Go for a 30-minute walk", Completed = false },
    //       new TaskItem { Id = 8, Title = "Send email", Description = "Reply to pending emails", Completed = false },
    //       new TaskItem { Id = 9, Title = "Cook dinner", Description = "Make a healthy meal", Completed = false },
    //       new TaskItem { Id = 10, Title = "Watch a movie", Description = "Relax and enjoy", Completed = false }
    //   );
    // }

  }







}