using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace Desktop2
{
    public partial class Tute : Form
    {
        public Tute()
        {
            InitializeComponent();
        }

        private void textBox4_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnInsert_Click(object sender, EventArgs e)
        {
            int tuteId = int.Parse(textBox1.Text);
            string title = textBox2.Text;
            string category = textBox3.Text;
            string content = textBox4.Text;

            // Corrected query
            string query = "INSERT INTO platformtute (TuteId, Title, Category, Content) VALUES (@TuteID, @Title, @Category, @Content)";

            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();

                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@TuteID", tuteId);
                    cmd.Parameters.AddWithValue("@Title", title);
                    cmd.Parameters.AddWithValue("@Category", category);
                    cmd.Parameters.AddWithValue("@Content", content);

                    cmd.ExecuteNonQuery();
                }
            }
            MessageBox.Show("Record Inserted Successfully");
            TuteData();
        }

        private void TuteData()
        {
            string query = "SELECT  * FROM platformtute";
            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    using (MySqlDataAdapter adapter = new MySqlDataAdapter(cmd))
                    {
                        DataTable dataTable = new DataTable();
                        adapter.Fill(dataTable);
                        dataGridView1.DataSource = dataTable;

                    }
                    
                    dataGridView1.Refresh();
                }
            }
        }

        private void btnUpdate_Click(object sender, EventArgs e)
        {
            int tuteId = int.Parse(textBox1.Text);
            string title = textBox2.Text;
            string category = textBox3.Text;
            string content = textBox4.Text;

            string query = "UPDATE platformtute SET Title=@Title, Category=@Category,Content=@Content WHERE TuteID=@TuteID";

            using (MySqlConnection conn = new DatabaseConnection().GetConnection()) // No semicolon here
            {
                conn.Open();

                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@TuteID", tuteId);
                    cmd.Parameters.AddWithValue("@Title", title);
                    cmd.Parameters.AddWithValue("@Category", category);
                    cmd.Parameters.AddWithValue("@Content", content);

                    cmd.ExecuteNonQuery();

                }
            }
            MessageBox.Show("Record Updated Successfully");
            TuteData();
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {
            int tuteId = int.Parse(textBox1.Text);

            string query = "DELETE FROM platformtute WHERE TuteID=@TuteID ";

            using (MySqlConnection conn = new DatabaseConnection().GetConnection()) 
            {
                conn.Open();

                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@TuteId", tuteId);


                    cmd.ExecuteNonQuery();

                }
            }
            MessageBox.Show("Record Deleted Successfully");
            TuteData();

        }

        private void btnNew_Click(object sender, EventArgs e)
        {

            textBox1.Text = "";
            textBox2.Text = "";
            textBox3.Text = "";
            textBox4.Text = "";
        }
    }
}
