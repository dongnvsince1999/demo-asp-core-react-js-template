using Abp.AutoMapper;
using SE347.L11_DemoApp.Entities;

namespace SE347.L11_DemoApp.JobTypes.Dto
{
    [AutoMapFrom(typeof(JobType))]
    public class JobTypeListDto
    {
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
    }
}
