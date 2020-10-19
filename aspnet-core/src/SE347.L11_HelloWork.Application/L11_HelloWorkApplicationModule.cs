using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Group0.SE347.L11_HelloWork.Application;
using SE347.L11_HelloWork.Authorization;

namespace SE347.L11_HelloWork
{
    [DependsOn(
        typeof(L11_HelloWorkCoreModule), 
        typeof(AbpAutoMapperModule),
        typeof(Group0ApplicationModule))]
    public class L11_HelloWorkApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<L11_HelloWorkAuthorizationProvider>();

            // add custom auto mapper
            Configuration.Modules.AbpAutoMapper().Configurators.Add(AutoMapperProfiles.Config);
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(L11_HelloWorkApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
