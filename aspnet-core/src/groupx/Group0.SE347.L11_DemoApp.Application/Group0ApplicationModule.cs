using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group0.SE347.L11_DemoApp.Application
{
    public class Group0ApplicationModule : AbpModule
    {
        public Group0ApplicationModule() { }

        public override void Initialize()
        {

        }

        public override void PreInitialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Group0ApplicationModule).GetAssembly());
        }
    }
}
