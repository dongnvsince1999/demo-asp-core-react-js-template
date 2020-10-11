using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using SE347.L11_DemoApp.Configuration;
using SE347.L11_DemoApp.Web;

namespace SE347.L11_DemoApp.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class L11_DemoAppDbContextFactory : IDesignTimeDbContextFactory<L11_DemoAppDbContext>
    {
        public L11_DemoAppDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<L11_DemoAppDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            L11_DemoAppDbContextConfigurer.Configure(builder, configuration.GetConnectionString(L11_DemoAppConsts.ConnectionStringName));

            return new L11_DemoAppDbContext(builder.Options);
        }
    }
}
