using Abp.Application.Services;
using SE347.L11_DemoApp.MultiTenancy.Dto;

namespace SE347.L11_DemoApp.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

