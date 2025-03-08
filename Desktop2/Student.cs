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
    public partial class Student : Form
    {
        public Student()
        {
            InitializeComponent();
        }

        private void btnInsert_Click(object sender, EventArgs e)
        {
            int studentId = int.Parse(textBox1.Text);
            string studentName = textBox2.Text;
            string email = textBox3.Text;
            int grade = int.Parse(textBox4.Text);


            string query = "INSERT INTO students(StudentId,StudentName, Email,Grade) VALUES (@StudentId, @StudentName, @Email, @Grade)";

            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();

                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@StudentID", studentId);
                    cmd.Parameters.AddWithValue("@StudentName", studentName);
                    cmd.Parameters.AddWithValue("@Email", email);
                    cmd.Parameters.AddWithValue("@Grade", grade);

                    cmd.ExecuteNonQuery();

                }
            }
            MessageBox.Show("Record Inserted Successfully");
            StudentData();
        }
        private void StudentData()
        {
            string query = "SELECT  * FROM students";
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
                }
            }
        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnUpdate_Click(object sender, EventArgs e)
        {
            int studentId = int.Parse(textBox1.Text);
            string studentName = textBox2.Text;
            string email = textBox3.Text;
            int grade = int.Parse(textBox4.Text);


            string query = "UPDATE students SET StudentName=@StudentName, Email=@Email , Grade=@Grade WHERE StudentID=@StudentID";


            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();

                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@StudentID", studentId);
                    cmd.Parameters.AddWithValue("@StudentName", studentName);
                    cmd.Parameters.AddWithValue("@Email", email);
                    cmd.Parameters.AddWithValue("@Grade", grade);

                    cmd.ExecuteNonQuery();

                }
            }
            MessageBox.Show("Record Updated Successfully");
            StudentData();
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {
            int studentId = int.Parse(textBox1.Text);



            string query = "DELETE FROM students WHERE StudentID=@StudentID ";

            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();

                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@StudentID", studentId);


                    cmd.ExecuteNonQuery();

                }
            }
            MessageBox.Show("Record Deleted Successfully");
            StudentData();
        }

        private void Student_Load(object sender, EventArgs e)
        {
            StudentData();
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
