using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using SE347.L11_HelloWork.Authorization.Roles;
using SE347.L11_HelloWork.Authorization.Users;
using SE347.L11_HelloWork.MultiTenancy;
using SE347.L11_HelloWork.Entities;

namespace SE347.L11_HelloWork.EntityFrameworkCore
{
    public class L11_HelloWorkDbContext : AbpZeroDbContext<Tenant, Role, User, L11_HelloWorkDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public DbSet<JobType> JobTypes { get; set; }

        public L11_HelloWorkDbContext(DbContextOptions<L11_HelloWorkDbContext> options)
            : base(options)
        {
        }

    }
}
