using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using SE347.L11_DemoApp.EntityFrameworkCore;
using SE347.L11_DemoApp.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace SE347.L11_DemoApp.Web.Tests
{
    [DependsOn(
        typeof(L11_DemoAppWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class L11_DemoAppWebTestModule : AbpModule
    {
        public L11_DemoAppWebTestModule(L11_DemoAppEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(L11_DemoAppWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(L11_DemoAppWebMvcModule).Assembly);
        }
    }
}