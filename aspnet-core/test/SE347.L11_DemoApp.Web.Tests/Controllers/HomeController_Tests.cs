using System.Threading.Tasks;
using SE347.L11_DemoApp.Models.TokenAuth;
using SE347.L11_DemoApp.Web.Controllers;
using Shouldly;
using Xunit;

namespace SE347.L11_DemoApp.Web.Tests.Controllers
{
    public class HomeController_Tests: L11_DemoAppWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}