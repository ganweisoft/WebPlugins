namespace Ganweisoft.IoTCenter.Module.EquipList.Jobs;

public class EquipCacheModel
{
    public string EquipStateString { get; set; }
    public int EquipStateInt { get; set; }
}

public class YcCacheModel
{
    public bool State { get; set; }
    public object YcValue { get; set; }
}

public class YxCacheModel
{
    public bool State { get; set; }
    public object YxValue { get; set; }
}