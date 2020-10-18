using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using SE347.L11_DemoApp.Authorization;

namespace SE347.L11_DemoApp
{
    [DependsOn(
        typeof(L11_DemoAppCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class L11_DemoAppApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<L11_DemoAppAuthorizationProvider>();

            // add custom auto mapper
            Configuration.Modules.AbpAutoMapper().Configurators.Add(AutoMapperProfiles.Config);
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(L11_DemoAppApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
