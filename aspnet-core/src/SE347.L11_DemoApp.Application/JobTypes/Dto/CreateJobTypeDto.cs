using Abp.AutoMapper;
using SE347.L11_DemoApp.Entities;
using System.ComponentModel.DataAnnotations;

namespace SE347.L11_DemoApp.JobTypes.Dto
{
    [AutoMapTo(typeof(JobType))]
    public class CreateJobTypeDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string DisplayName { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
