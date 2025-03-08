using MySql.Data.MySqlClient;
using Org.BouncyCastle.Asn1.Cmp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Desktop2
{
    internal class DatabaseConnection
    {
        private MySqlConnection connection;

        public DatabaseConnection()
        {
            string connectionString = "Server=localhost;Database=Tutorial2DB;Uid = root;Pwd=Sanduni2001#;";

            connection = new MySqlConnection(connectionString);
        }
        public MySqlConnection GetConnection()
        {
            return connection;
        }
    }
}
