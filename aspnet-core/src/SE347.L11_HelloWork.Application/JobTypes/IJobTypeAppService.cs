using Abp.Application.Services;
using Abp.Application.Services.Dto;
using SE347.L11_HelloWork.JobTypes.Dto;
using System.Threading.Tasks;

namespace SE347.L11_HelloWork.JobTypes
{
    public interface IJobTypeAppService : IApplicationService
    {
        Task<JobTypeDto> CreateJobTypeAsync(CreateJobTypeDto input);

        Task<JobTypeDto> GetJobTypeAsync(EntityDto<int> input);

        Task<ListResultDto<JobTypeDto>> GetJobTypesAsync();

        Task<PagedResultDto<JobTypeListDto>> GetJobTypesFilteredAsync(GetJobTypeInputDto input);

        Task<JobTypeDto> UpdateJobTypeAsync(UpdateJobTypeDto input);
        
        Task DeleteJobTypeAsync(EntityDto<int> input);
    }
}
