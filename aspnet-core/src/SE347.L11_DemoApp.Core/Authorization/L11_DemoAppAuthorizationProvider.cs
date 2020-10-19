using Abp.Authorization;
using Abp.Localization;
using Abp.MultiTenancy;

namespace SE347.L11_DemoApp.Authorization
{
    public class L11_DemoAppAuthorizationProvider : AuthorizationProvider
    {
        public override void SetPermissions(IPermissionDefinitionContext context)
        {
            context.CreatePermission(PermissionNames.Pages_Users, L("Users"));
            context.CreatePermission(PermissionNames.Pages_Roles, L("Roles"));
            context.CreatePermission(PermissionNames.Pages_Tenants, L("Tenants"), multiTenancySides: MultiTenancySides.Host);

            // JobType
            var jobType = context.CreatePermission(PermissionNames.Pages_JobType, L("JobType"));
            jobType.CreateChildPermission(PermissionNames.Pages_JobType_Create, L("CreateJobType"));
            jobType.CreateChildPermission(PermissionNames.Pages_JobType_Update, L("UpdateJobType"));
            jobType.CreateChildPermission(PermissionNames.Pages_JobType_Get, L("GetJobType"));
            jobType.CreateChildPermission(PermissionNames.Pages_JobType_Delete, L("DeleteJobType"));

            // Demo
            var demo = context.CreatePermission(PermissionNames.Pages_Group0_Demos, L("Demo"));
            demo.CreateChildPermission(PermissionNames.Pages_Group0_Demos_Create, L("CreateDemo"));
            demo.CreateChildPermission(PermissionNames.Pages_Group0_Demos_Update, L("UpdateDemo"));
            demo.CreateChildPermission(PermissionNames.Pages_Group0_Demos_Delete, L("DeleteDemo"));
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, L11_DemoAppConsts.LocalizationSourceName);
        }
    }
}
