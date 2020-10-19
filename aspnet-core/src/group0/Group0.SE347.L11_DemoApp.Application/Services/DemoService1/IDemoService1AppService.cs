
using SE347.L11_DemoApp.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Group0.SE347.L11_DemoApp.Application.Services.DemoService1
{
    public interface IDemoService1AppService
    {
        Task<IEnumerable<JobType>> GetJobTypes();
    }
}
