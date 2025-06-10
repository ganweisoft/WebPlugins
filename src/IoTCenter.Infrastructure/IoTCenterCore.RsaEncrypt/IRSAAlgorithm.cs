using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IoTCenterCore.RsaEncrypt;

public interface IRSAAlgorithm
{
    string Encrypt(string encryptedText);
    string Decrypt(string decryptedText);
    string GetPublicCipher();
}
