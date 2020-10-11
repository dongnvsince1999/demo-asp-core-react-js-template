using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace SE347.L11_DemoApp.Localization
{
    public static class L11_DemoAppLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(L11_DemoAppConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(L11_DemoAppLocalizationConfigurer).GetAssembly(),
                        "SE347.L11_DemoApp.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
