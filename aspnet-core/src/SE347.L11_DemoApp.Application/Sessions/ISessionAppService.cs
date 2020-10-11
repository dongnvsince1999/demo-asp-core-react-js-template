using System.Threading.Tasks;
using Abp.Application.Services;
using SE347.L11_DemoApp.Sessions.Dto;

namespace SE347.L11_DemoApp.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
