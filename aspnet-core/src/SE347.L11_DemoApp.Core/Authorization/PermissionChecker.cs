using Abp.Authorization;
using SE347.L11_DemoApp.Authorization.Roles;
using SE347.L11_DemoApp.Authorization.Users;

namespace SE347.L11_DemoApp.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
