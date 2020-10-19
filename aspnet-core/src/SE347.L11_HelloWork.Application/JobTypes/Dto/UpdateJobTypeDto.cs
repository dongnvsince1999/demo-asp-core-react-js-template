using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;
using System;
using System.ComponentModel.DataAnnotations;

namespace SE347.L11_HelloWork.JobTypes.Dto
{
    [AutoMapTo(typeof(JobType))]
    public class UpdateJobTypeDto
    {
        [Required]
        [Range(1, int.MaxValue)]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string DisplayName { get; set; }
        [Required]
        public string Description { get; set; }
    }
}

