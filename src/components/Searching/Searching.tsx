import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Searching.module.scss";

type Inputs = {
  title: string;
  description: string;
};

const Searching: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch("title"));
  return (
    <div className={styles.searching}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.titleContainer}>
            <input
              className={styles.inputTitle}
              defaultValue="test"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className={styles.error}>Este campo es obligatorio</span>
            )}
          </div>
          <div className={styles.descriptionContainer}>
            <input
              className={styles.inputDescription}
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className={styles.error}>Este campo es obligatorio</span>
            )}
          </div>
          <div className={styles.submitContainer}>
						<input className={styles.submit} type="submit" />
					</div>
        </form>
      </div>
    </div>
  );
};

export default Searching;
