using Microsoft.Extensions.Configuration;
using Castle.MicroKernel.Registration;
using Abp.Events.Bus;
using Abp.Modules;
using Abp.Reflection.Extensions;
using SE347.L11_DemoApp.Configuration;
using SE347.L11_DemoApp.EntityFrameworkCore;
using SE347.L11_DemoApp.Migrator.DependencyInjection;

namespace SE347.L11_DemoApp.Migrator
{
    [DependsOn(typeof(L11_DemoAppEntityFrameworkModule))]
    public class L11_DemoAppMigratorModule : AbpModule
    {
        private readonly IConfigurationRoot _appConfiguration;

        public L11_DemoAppMigratorModule(L11_DemoAppEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbSeed = true;

            _appConfiguration = AppConfigurations.Get(
                typeof(L11_DemoAppMigratorModule).GetAssembly().GetDirectoryPathOrNull()
            );
        }

        public override void PreInitialize()
        {
            Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
                L11_DemoAppConsts.ConnectionStringName
            );

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
            Configuration.ReplaceService(
                typeof(IEventBus), 
                () => IocManager.IocContainer.Register(
                    Component.For<IEventBus>().Instance(NullEventBus.Instance)
                )
            );
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(L11_DemoAppMigratorModule).GetAssembly());
            ServiceCollectionRegistrar.Register(IocManager);
        }
    }
}
