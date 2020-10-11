using Abp.MultiTenancy;
using SE347.L11_DemoApp.Authorization.Users;

namespace SE347.L11_DemoApp.MultiTenancy
{
    public class Tenant : AbpTenant<User>
    {
        public Tenant()
        {            
        }

        public Tenant(string tenancyName, string name)
            : base(tenancyName, name)
        {
        }
    }
}
