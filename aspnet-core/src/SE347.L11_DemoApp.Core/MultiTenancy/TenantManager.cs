using Abp.Application.Features;
using Abp.Domain.Repositories;
using Abp.MultiTenancy;
using SE347.L11_DemoApp.Authorization.Users;
using SE347.L11_DemoApp.Editions;

namespace SE347.L11_DemoApp.MultiTenancy
{
    public class TenantManager : AbpTenantManager<Tenant, User>
    {
        public TenantManager(
            IRepository<Tenant> tenantRepository, 
            IRepository<TenantFeatureSetting, long> tenantFeatureRepository, 
            EditionManager editionManager,
            IAbpZeroFeatureValueStore featureValueStore) 
            : base(
                tenantRepository, 
                tenantFeatureRepository, 
                editionManager,
                featureValueStore)
        {
        }
    }
}
