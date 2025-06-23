// Copyright (c) 2025 Shenzhen Ganwei Software Technology Co., Ltd
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IoTCenter.Data.Model
{
    [Table("iotaccountpasswordrule")]
    public class IoTAccountPasswordRule
    {
        [Key]
        [Column("id")]
        public long Id { get; set; }
        [Column("json")]
        public string JSON { get; set; }
    }
}
