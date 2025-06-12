using System;
namespace Ganweisoft.IoTCenter.Module.EquipList;

public class BatchMoveEquipDto
{
    public int[] EquipNoList { get; set; } = Array.Empty<int>();
    public int newGroupId { get; set; }

}