using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Models
{
    public class EquipmentContext:DbContext
    {
        public EquipmentContext(DbContextOptions<EquipmentContext> options):base(options)
            
        {

        }
        public DbSet<EquipmentDetail> EquipmentDetails {get; set;}
        public DbSet<EquipmentAsignation> EquipmentAsig { get; set; }
        public DbSet<UsersUpdate> UsersUpdate { get; set; }
       // public DbSet<UsersEquipment> UsersEquipment { get; set; }
    }
    
}
