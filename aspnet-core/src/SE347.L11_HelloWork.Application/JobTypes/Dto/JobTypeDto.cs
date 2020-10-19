using Abp.Application.Services.Dto;
using System;

namespace SE347.L11_HelloWork.JobTypes.Dto
{
    public class JobTypeDto : EntityDto<int>
    {
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }

        public int DaysOld { get; set; }
        public DateTime? LastModificationTime { get; set; }
    }
}
