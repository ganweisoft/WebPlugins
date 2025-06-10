using IoTCenter.Utilities;

namespace Ganweisoft.IoTCenter.Module.TimeTask.Models
{
    public class GetProcTaskSpecDataModel : QueryRequest
    {

        public string BeginTime { get; set; }

        public string EndTime { get; set; }

        public string SearchName { get; set; }
    }
}
