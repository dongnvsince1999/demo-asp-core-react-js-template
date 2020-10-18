using Abp.Application.Services.Dto;
using Microsoft.AspNetCore.Mvc;
using SE347.L11_DemoApp.JobTypes;
using SE347.L11_DemoApp.JobTypes.Dto;
using System.Threading.Tasks;

namespace SE347.L11_DemoApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class JobTypesController : L11_DemoAppControllerBase
    {
        private readonly IJobTypeAppService _jobTypeAppService;

        public JobTypesController(IJobTypeAppService jobTypeAppService)
        {
            _jobTypeAppService = jobTypeAppService;
        }

        [HttpGet]
        public async Task<ListResultDto<JobTypeDto>> Get()
        {
            return await _jobTypeAppService.GetJobTypesAsync();
        }

        [HttpGet]
        public async Task<PagedResultDto<JobTypeListDto>> GetWithFilter(string name)
        {
            return await _jobTypeAppService.GetJobTypesFilteredAsync(new GetJobTypeInputDto() { Name = name });
        }

        [HttpGet("{id}", Name = "GetJobType")]
        public async Task<JobTypeDto> Get(int id)
        {
            return await _jobTypeAppService.GetJobTypeAsync(new EntityDto<int>(id));
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateJobTypeDto input)
        {
            var newJobType = await _jobTypeAppService.CreateJobTypeAsync(input);
            return CreatedAtRoute("GetJobType", new { id = newJobType.Id }, newJobType);
        }

        [HttpPut]
        public async Task<JobTypeDto> Update(UpdateJobTypeDto input)
        {
            return await _jobTypeAppService.UpdateJobTypeAsync(input);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _jobTypeAppService.DeleteJobTypeAsync(new EntityDto<int>(id));
            return NoContent();
        }
    }
}
