using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using SE347.L11_DemoApp.Configuration.Dto;

namespace SE347.L11_DemoApp.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : L11_DemoAppAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
