using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace SE347.L11_DemoApp.Controllers
{
    public abstract class L11_DemoAppControllerBase: AbpController
    {
        protected L11_DemoAppControllerBase()
        {
            LocalizationSourceName = L11_DemoAppConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
