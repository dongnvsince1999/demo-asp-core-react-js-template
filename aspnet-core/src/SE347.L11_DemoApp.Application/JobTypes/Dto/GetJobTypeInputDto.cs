using Abp.Application.Services.Dto;

namespace SE347.L11_DemoApp.JobTypes.Dto
{
    public class GetJobTypeInputDto : PagedAndSortedResultRequestDto
    {        
        public string Name { get; set; }
    }
}

