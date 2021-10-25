using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using back_end.Models;

namespace back_end.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipmentDetailController : ControllerBase
    {
        private readonly EquipmentContext _context;

        public EquipmentDetailController(EquipmentContext context)
        {
            _context = context;
        }

        // GET: api/EquipmentDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EquipmentDetail>>> GetEquipmentDetails()
        {
            return await _context.EquipmentDetails.ToListAsync();
        }
        //agregarun try para manejar la excepciones

        // GET: api/EquipmentDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EquipmentDetail>> GetEquipmentDetail(int id)
        {
            var equipmentDetail = await _context.EquipmentDetails.FindAsync(id);

            if (equipmentDetail == null)
            {
                return NotFound();
            }

            return equipmentDetail;
        }

        // PUT: api/EquipmentDetail/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754   [FromBody]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEquipmentDetail(int id, EquipmentDetail equipmentDetail)
        {
            if (id != equipmentDetail.EquipmentId)
            {
                return BadRequest();
            }

        _context.Entry(equipmentDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
    }
            catch (DbUpdateConcurrencyException)
            {
                if (!EquipmentDetailExists(id))
                {
                    return NotFound();
                    Console.Write("id no encontrado" + id);
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EquipmentDetail
        //nada peticion del back con el controlador y la migracion para guardar los datos de front
        //trabajandoe en le modulo crud del modulo Equipo, ahcer ña conexion con el front

        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EquipmentDetail>> PostEquipmentDetail(EquipmentDetail equipmentDetail)
        {
            _context.EquipmentDetails.Add(equipmentDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEquipmentDetail", new { id = equipmentDetail.EquipmentId }, equipmentDetail);
        }

        // DELETE: api/EquipmentDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEquipmentDetail(int id)
        {
            var equipmentDetail = await _context.EquipmentDetails.FindAsync(id);
            if (equipmentDetail == null)
            {
                return NotFound();
            }

            _context.EquipmentDetails.Remove(equipmentDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EquipmentDetailExists(int id)
        {
            return _context.EquipmentDetails.Any(e => e.EquipmentId == id);
        }
    }
}
