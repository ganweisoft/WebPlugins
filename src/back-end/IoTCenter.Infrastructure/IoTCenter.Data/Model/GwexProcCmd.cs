// Copyright (c) 2025 Shenzhen Ganwei Software Technology Co., Ltd
using System.ComponentModel.DataAnnotations.Schema;

namespace IoTCenter.Data.Model
{
    [Table("gwexproccmd")]
    public class GwexProcCmd
    {
        [Column("proc_code")]
        public int ProcCode { get; set; }
        [Column("cmd_nm")]
        public string CmdNm { get; set; }
        [Column("main_instruction")]
        public string MainInstruction { get; set; }
        [Column("minor_instruction")]
        public string MinorInstruction { get; set; }
        [Column("value")]
        public string Value { get; set; }
        [Column("record")]
        public bool Record { get; set; }
    }
}
