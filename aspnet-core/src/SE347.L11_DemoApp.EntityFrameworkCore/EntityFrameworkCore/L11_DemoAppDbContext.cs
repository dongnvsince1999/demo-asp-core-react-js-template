using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using SE347.L11_DemoApp.Authorization.Roles;
using SE347.L11_DemoApp.Authorization.Users;
using SE347.L11_DemoApp.MultiTenancy;

namespace SE347.L11_DemoApp.EntityFrameworkCore
{
    public class L11_DemoAppDbContext : AbpZeroDbContext<Tenant, Role, User, L11_DemoAppDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public L11_DemoAppDbContext(DbContextOptions<L11_DemoAppDbContext> options)
            : base(options)
        {
        }
    }
}
