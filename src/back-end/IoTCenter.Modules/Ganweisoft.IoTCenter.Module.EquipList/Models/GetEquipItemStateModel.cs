using IoTCenter.Utilities;
using System.Text.Json.Serialization;

namespace Ganweisoft.IoTCenter.Module.EquipList;

public class GetEquipItemStateModel : QueryRequest
{
    public int EquipNo { get; set; }
    public string SearchName { get; set; }

    [JsonIgnore]
    public bool IsGetAll { get; set; }
}
