using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Models
{

    public class EquipmentDetail
    {
        [Key]
        public int EquipmentId { get; set; }
        // detalle de migrador de BD https://www.entityframeworktutorial.net/efcore/configuration-in-entity-framework-core.aspx
        [Column(TypeName = "nvarchar(45)")]
        public string nserie { get; set; }

        [Column(TypeName = "nvarchar(45)")]
        public string name { get; set; }

        [Column(TypeName = "nvarchar(45)")]
        public string model { get; set; }

        [Column(TypeName = "nvarchar(45)")]
        public string category { get; set; }

        [Column]
        public int imei { get; set; }

        [Column]
        public int equipmentstock { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string carctetis { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string accesories { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string codigo { get; set; }

    }
    // metodo de busqueda por id de Equipo
    //public ActionResult<EquipmentAsignation> Get(int EquipmentId){
    //    var Equip = EquipmentAsignation.Where(d => d.EquipmentId == EquipmentId).FirtsOrDefault();
    //    if (Equip == null)
    //    {
    //        return NotFound();
    //    }
    //    return Equip;
    //}
    public class EquipmentAsignation
    {

        [Key]
        public int idAsigment { get; set; }
        // detalle de migrador de BD https://www.entityframeworktutorial.net/efcore/configuration-in-entity-framework-core.aspx

        [Column]
        public int equipmentstock { get; set; }

        [Column]
        public int allasigned { get; set; }
    }
    public class UsersUpdate
    {

        [Key]
        public int dni { get; set; }
        // detalle de migrador de BD https://www.entityframeworktutorial.net/efcore/configuration-in-entity-framework-core.aspx

        [Column(TypeName = "nvarchar(45)")]
        public string nameuser { get; set; }

        [Column(TypeName = "nvarchar(45)")]
        public string sur_paternal { get; set; }

        [Column(TypeName = "nvarchar(45)")]
        public string sur_maternal { get; set; }

        [Column(TypeName = "nvarchar(45)")]
        public string direction { get; set; }

        [Column]
        public int email { get; set; }

        [Column(TypeName = "nvarchar(45)")]
        public string departament { get; set; }

        [Column(TypeName = "nvarchar(45)")]
        public string puesto { get; set; }

        public class UsersEquip
        {

            [Key]
            public int idue { get; set; }
            // detalle de migrador de BD https://www.entityframeworktutorial.net/efcore/configuration-in-entity-framework-core.aspx
                       
            [Column]
            public int equipmentstocku { get; set; }

            [Column]
            public int allasignedu { get; set; }
            //asociacion de 1 a 1 con las tablas
            
        }
    }
}
