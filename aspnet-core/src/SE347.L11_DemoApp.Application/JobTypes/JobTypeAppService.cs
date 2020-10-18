using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Microsoft.EntityFrameworkCore;
using SE347.L11_DemoApp.Authorization;
using SE347.L11_DemoApp.Entities;
using SE347.L11_DemoApp.JobTypes.Dto;
using System.Linq;
using System.Threading.Tasks;

namespace SE347.L11_DemoApp.JobTypes
{
    public class JobTypeAppService : L11_DemoAppAppServiceBase, IJobTypeAppService
    {
        private readonly IRepository<JobType> _jobTypeRepo;

        public JobTypeAppService(IRepository<JobType> jobTypeRepo)
        {
            _jobTypeRepo = jobTypeRepo;
        }
        
        [AbpAuthorize(PermissionNames.Pages_JobType_Create)]
        public async Task<JobTypeDto> CreateJobTypeAsync(CreateJobTypeDto input)
        {
            var jobType = ObjectMapper.Map<JobType>(input);
            jobType = await _jobTypeRepo.InsertAsync(jobType);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<JobTypeDto>(jobType);
        }

        [AbpAuthorize(PermissionNames.Pages_JobType_Delete)]
        public async Task DeleteJobTypeAsync(EntityDto<int> input)
        {
            await _jobTypeRepo.DeleteAsync(input.Id);
        }

        [AbpAllowAnonymous]
        public async Task<JobTypeDto> GetJobTypeAsync(EntityDto<int> input)
        {
            var jobType = await _jobTypeRepo.GetAsync(input.Id);
            return ObjectMapper.Map<JobTypeDto>(jobType);
        }

        [AbpAllowAnonymous]
        public async Task<ListResultDto<JobTypeDto>> GetJobTypesAsync()
        {
            var jobTypes = await _jobTypeRepo.GetAllListAsync();
            
            return new ListResultDto<JobTypeDto>(
                jobTypes.Select(jt => ObjectMapper.Map<JobTypeDto>(jt)).ToList()
            );
        }
        [AbpAllowAnonymous]
        public async Task<PagedResultDto<JobTypeListDto>> GetJobTypesFilteredAsync(GetJobTypeInputDto input)
        {
            var query = !input.Name.IsNullOrWhiteSpace()
                        ? _jobTypeRepo.GetAll().Where(jt => jt.Name.Contains(input.Name))
                        : _jobTypeRepo.GetAll();

            var totalCount = await query.CountAsync();
            var jobTypes = await query.ToListAsync();

            return new PagedResultDto<JobTypeListDto>(
                totalCount,
                jobTypes.Select(jt => ObjectMapper.Map<JobTypeListDto>(jt)).ToList()
            );
        }

        [AbpAuthorize(PermissionNames.Pages_JobType_Update)]
        public async Task<JobTypeDto> UpdateJobTypeAsync(UpdateJobTypeDto input)
        {
            var jobType = await _jobTypeRepo.GetAsync(input.Id);
            ObjectMapper.Map(input, jobType);
            var savedJobType = await _jobTypeRepo.UpdateAsync(jobType);
            return ObjectMapper.Map<JobTypeDto>(savedJobType);
        }
    }
}
