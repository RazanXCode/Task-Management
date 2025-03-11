using System.ComponentModel.DataAnnotations;

namespace TaskService.Models
{
 // Note: I named the model TaskItem beacause there is a system class called Task 
    public class TaskItem
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        public string Description { get; set; }

        public bool Completed { get; set; }


    }


}