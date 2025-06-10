using IoTCenter.Data;
using Microsoft.EntityFrameworkCore;

namespace Ganweisoft.IoTCenter.Module.TimeTask
{
    public class TimeTaskDbContext : GWDbContext
    {
        public TimeTaskDbContext(DbContextOptions<TimeTaskDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
