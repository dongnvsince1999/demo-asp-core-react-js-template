using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using SE347.L11_DemoApp.Authorization;
using SE347.L11_DemoApp.Authorization.Roles;
using SE347.L11_DemoApp.Authorization.Users;
using SE347.L11_DemoApp.Editions;
using SE347.L11_DemoApp.MultiTenancy;

namespace SE347.L11_DemoApp.Identity
{
    public static class IdentityRegistrar
    {
        public static IdentityBuilder Register(IServiceCollection services)
        {
            services.AddLogging();

            return services.AddAbpIdentity<Tenant, User, Role>()
                .AddAbpTenantManager<TenantManager>()
                .AddAbpUserManager<UserManager>()
                .AddAbpRoleManager<RoleManager>()
                .AddAbpEditionManager<EditionManager>()
                .AddAbpUserStore<UserStore>()
                .AddAbpRoleStore<RoleStore>()
                .AddAbpLogInManager<LogInManager>()
                .AddAbpSignInManager<SignInManager>()
                .AddAbpSecurityStampValidator<SecurityStampValidator>()
                .AddAbpUserClaimsPrincipalFactory<UserClaimsPrincipalFactory>()
                .AddPermissionChecker<PermissionChecker>()
                .AddDefaultTokenProviders();
        }
    }
}
