import {useState} from "react";
import {z} from "zod";

const formSchema = z.object({
  name: z
      .string()
      .trim()
      .nonempty("Name is required"),
  email: z
      .string()
      .trim()
      .nonempty("Email is required")
      .email("Email is invalid"),
  message: z
      .string()
      .trim()
      .nonempty("Message is required")
      .min(5, "Message must be at least 5 characters long"),
})

type FormValues = z.infer<typeof formSchema>;

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const MultiFieldFormWithZodValidation = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [errors, setErrors] = useState<FormErrors | null>(null);
  //const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

  const validateForm = ()=> {
    const result = formSchema.safeParse(values);
    // {success: true, data: validateData}
    // {success: false, errors: errors};
    if (!result.success) {
      const newErrors: FormErrors = {}
      result.error.issues.forEach((issue) => {
        const filedName = issue.path[0] as keyof FormValues;
        newErrors[filedName] = issue.message;
      });
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  }


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setSubmittedData(values);
      setValues(initialValues);
    }

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setValues (prev => ({
      ...prev,
      [name]: value,
    }));

    setErrors(prev => ({
      ...prev,
      [name]: undefined,
    }))
  };

  const handleClear = () => {
    setValues(initialValues);
    setSubmittedData(null);
    setErrors(null)
  };

  return(
      <>
        <div className="flex max-w-sm mx-auto mt-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                  type="text"
                  name="name"
                  value={values.name}
                  placeholder="Name"
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border"
              />
              {errors?.name && (
                  <p className="text-cf-dark-red">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="Email"
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border"
              />
              {errors?.email && (
                  <p className="text-cf-dark-red">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                  name="message"
                  value={values.message}
                  placeholder="Type your message"
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded border"
                  minLength={5}
              ></textarea>
              {errors?.message && (
                  <p className="text-cf-dark-red">{errors.message}</p>
              )}
            </div>

            <div className="flex gap-4">
              <button
                  type="submit"
                  className="bg-cf-dark-red text-white px-4 py-2 rounded"
              >
                Submit
              </button>
              <button
                  type="button"
                  onClick={handleClear}
                  className="bg-gray-200 text-cf-gray-700 px-4 py-2 rounded">
                Clear
              </button>
            </div>

            { submittedData && (
                <div className="mt-6 border-t pt-4 space-y-2">
                  <h2 className="font-semibold">Submitted Data</h2>
                  <p><strong>Name:</strong> {submittedData.name}</p>
                  <p><strong>Email:</strong> {submittedData.email}</p>
                  <p><strong>Message:</strong> {submittedData.message}</p>
                </div>
            )}

          </form>
        </div>
      </>
  )
};

export default MultiFieldFormWithZodValidation;