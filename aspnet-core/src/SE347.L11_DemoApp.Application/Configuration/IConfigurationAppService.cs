using System.Threading.Tasks;
using SE347.L11_DemoApp.Configuration.Dto;

namespace SE347.L11_DemoApp.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
