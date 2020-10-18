using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;

namespace SE347.L11_DemoApp.Entities
{
    public class JobType : Entity<int>, IFullAudited
    {
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }

        public long? CreatorUserId { get; set; }
        public DateTime CreationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }
    }
}
