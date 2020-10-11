using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace SE347.L11_DemoApp.EntityFrameworkCore
{
    public static class L11_DemoAppDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<L11_DemoAppDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<L11_DemoAppDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
